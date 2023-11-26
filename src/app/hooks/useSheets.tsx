import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const useSheets = () => {
	const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
	const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
	const PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY;

	const serviceAccountAuth = new JWT({
		email: CLIENT_EMAIL,
		key: PRIVATE_KEY,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	if (!SHEET_ID) {
		return {
			postForm: async (row: any) => {
				console.error("SHEET_ID is not defined");
				return undefined;
			},
		};
	}

	const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);

	const appendSpreadsheetRow = async (row: any) => {
		try {
			// loads document properties and worksheets
			await doc.loadInfo();

			const sheet = doc.sheetsByIndex[0];
			const result = await sheet.addRow(row);
			return result;
		} catch (e) {
			console.error("Error: ", e);
		}
	};

	

	return {
		postForm: appendSpreadsheetRow,
	};
};

export default useSheets;
