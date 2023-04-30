async function chromeextension () {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=d1e2bbda-ca77-4399-8fbd-6b82a41ea435&offset=0").then(response => response.json()).then(data => {
        if(data.status != "success")
        return;

        const matchdata = data.data;
        if(!matchdata)
        return [];
        // const scorecard = matchdata.filter(ipl=>ipl.series_id ===
        //     "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(scorecard=>scorecard.score.map(score=>score));
        // console.log(scorecard);
        const ipldata = 
        matchdata.filter(ipl=>ipl.series_id ===
            "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(
        ipl=>`${ipl.name},
        ${ipl.venue},
        ${ipl.status}, 
        `)
        document.getElementById("ipl2023").innerHTML = ipldata.map(ipl=> `<li>${ipl}</li><br>`).join('');
        console.log(ipldata)}
    ).catch(error=> console.log(error));
}

chromeextension();