import FormButton from './FormButton';

const Form = () => {

    const inputs = [
        { type: 'text', label: "Name: ", name: 'name', id: 'name', className: 'border-2' },
        { type: 'email', label: "Email: ", name: 'email', id: 'email', className: 'border-2' }
    ];

    const formAction = async (formData: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const userData = Object.fromEntries(formData);
        console.log(userData);
    }

    return (
        <form action={formAction} className="flex flex-col gap-3 max-w-xs">
            {inputs.length > 0 && inputs.map(({ type, label, name, id, className }) => {
                return <div key={id}>
                    <label className="flex flex-col gap-1" htmlFor={id}>{label}</label>
                    <input type={type} className={className} name={name} id={id} required />
                </div>
            })}
            <FormButton type='submit' />
        </form>
    )
}

export default Form
