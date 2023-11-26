'use client'
import useSheets from "@/app/hooks/useSheets";
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoadingSpinner } from "./LoadingSpinner";

interface FeedbackType {
	FullName: string;
	Email: string;
	Feedback: string;
}
export const ResponseForm = () => {
	const { register, handleSubmit, formState: {
		isSubmitting, isSubmitSuccessful
	} } = useForm<FeedbackType>();
    const { postForm } = useSheets();
    
	const onSubmit: SubmitHandler<FeedbackType> = (data) => {
		postForm(data);
		if (isSubmitSuccessful) {
			console.log('Submitted');
		}
	}
    
    return (
		<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
			<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 text-black">
				<form
					className="grid grid-cols-2 gap-x-10 gap-y-6"
					onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						className=" border-2 border-zinc-700 rounded-md col-span-1  h-14"
						{...register("FullName")}
						placeholder="Full Name"
					/>
					<input
						type="text"
						className=" border-2 border-zinc-700 rounded-md col-span-1 h-14"
						{...register("Email")}
						placeholder="E-mail"
					/>
					<textarea
						{...register("Feedback")}
						className=" border-2 border-zinc-700 rounded-md col-span-2"
						placeholder="Write your feedback..."
					/>
					<div className="w-full flex items-center justify-center col-span-full">
						<button
							type="submit"
							className="flex  items-center justify-center bg-purple-600 text-slate-300 hover:bg-purple-500 focus-visible:outline-purple-600 py-4 px-6 w-1/2 rounded-xl">
							{isSubmitting ? <LoadingSpinner/> :  'Submit'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResponseForm;
