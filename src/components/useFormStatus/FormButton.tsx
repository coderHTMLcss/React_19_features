import { useFormStatus } from 'react-dom';

type FormButtonProps = {
    type: 'submit' | 'reset' | 'button';
}
const FormButton = ({ type }: FormButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <button className="bg-black text-white px-4 py-2 mt-3" type={type} disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    )
}

export default FormButton
