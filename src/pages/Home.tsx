import Container from "@mui/material/Container";

function Home() {
    return (
        <>
            <div className="h-96">
                <div className="p-[24px]">
                    <Container maxWidth="xl">
                        <h1 className="text-2xl">Home</h1>
                    </Container>
                </div>
            </div>
            <div className="bg-gray-200 h-96"></div>
            <div className="bg-gray-400 h-96"></div>
            <div className="bg-gray-800 h-96"></div>
        </>
    );
}

export default Home;
