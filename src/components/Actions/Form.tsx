import React, { useCallback } from "react";

const Form = () => {
    const formAction = useCallback((formData: FormData) => {
        const userData = Object.fromEntries(formData);
        console.log(userData);
    }, []);

    const inputClass = "border-2 border-black rounded p-1";

    const INPUTS = [
        { label: "Name", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" },
        { label: "Password", type: "password", name: "password" },
    ];

    return (
        <form action={formAction} className="flex flex-col gap-3 max-w-xs">
            {INPUTS.map(({ label, type, name }) => (
                <label key={name} className="flex flex-col gap-1">
                    {label}:
                    <input className={inputClass} type={type} name={name} />
                </label>
            ))}
            <button type="submit" className="bg-black text-white px-4 py-2 mt-3">
                Submit
            </button>
        </form>
    );
};

export default Form;
