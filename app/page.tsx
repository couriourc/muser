export default async function Home() {
    const {stargazers_count: stars} = await fetch(
        "https://api.github.com/repos/couriourc/muser",
        {
            ...(process.env.GITHUB_OAUTH_TOKEN && {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }),
            // data will revalidate every 24 hours
            next: {revalidate: 86400},
        },
    )
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return (
        <>
            <h1 className="font-bold text-white">Let us Start it{stars}</h1>
        </>);
}
