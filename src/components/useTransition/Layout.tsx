import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Posts from "./Posts";

type Tab = "home" | "posts" | "contact"

const Layout = () => {
    const [activeTab, setActiveTab] = React.useState<Tab>("home");
    const [isPending, startTransition] = React.useTransition();

    const handleTabChange = (tab: Tab) => {
        startTransition(() => {
            setActiveTab(tab);
        });
    };

    const contentMap = {
        home: <Home />,
        posts: <Posts />,
        contact: <Contact />,
    };

    return (
        <div>
            <div className="tabs">
                {["home", "posts", "contact"].map((tab) => (
                    <button
                        key={tab}
                        className={`border-2 p-4 m-2 ${activeTab === tab ? "bg-gray-300" : ""}`}
                        onClick={() => handleTabChange(tab as Tab)}
                        aria-pressed={activeTab === tab}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
            {isPending && <p>Loading...</p>}
            <div className="content">{contentMap[activeTab]}</div>
        </div>
    );
};

export default Layout;
