import { useActionState } from "react";

const login = async (prevState: string | null, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return "Email і пароль обов’язкові!";
    }

    if (email !== "test@example.com" || password !== "123456") {
        return "Невірний email або пароль.";
    }

    return null;
};

const LoginForm = () => {
    const [error, formAction] = useActionState(login, null);
    // console.log(error);

    return (
        <form action={formAction} className="p-4 border rounded">
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 block w-full"
            />
            <input
                type="password"
                name="password"
                placeholder="Пароль"
                className="border p-2 block w-full mt-2"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 mt-2 w-full"
                >
                Увійти
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
};

export default LoginForm;



