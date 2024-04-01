import Logo from "./logo";

export default function Header() {
    return (
        <header className="bg-white fixed top-0 w-full h-16 px-6 lg:px-12 flex justify-between items-center border-neutral-100 border-b-2">
            <Logo fontSize={32} color="#4D7C0F" />
            <span>Auth</span>
        </header>
    );
};