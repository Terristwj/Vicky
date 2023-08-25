import { Link } from "react-router-dom";

function NoPage() {
    return (
        <>
            <div className="px-[48px] py-[12px]">
                <h1 className="text-4xl">Page 404</h1>
                <h1 className="text-2xl">
                    Please redirect to&nbsp;
                    <Link to="/" className="text-blue-700">
                        Homepage
                    </Link>
                    .
                </h1>
            </div>
        </>
    );
}

export default NoPage;
