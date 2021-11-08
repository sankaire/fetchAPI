//chart
const chartIt = async () =>{
    const data = await getData()
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: data.xs,
        datasets: [
        {
            label: "Global Avarage Temparature",
            data: data.ys,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor:"rgba(255, 99, 132, 1)",
            borderWidth: 1,
        },
        ],
    }
    });
}

const getData = async () =>{
    const xs= []
    const ys = []
    const res = await fetch('ZonAnn.Ts+dSST.csv')
    const data = await res.text()

    const table = data.split('\n').slice(1)

    table.forEach(row =>{
        const columns = row.split(',')
        const year = columns[0]
        xs.push(year)
        const temp = columns[1]
        ys.push(parseFloat(temp) + 14)
        console.log(year, temp)
    })
    return { xs, ys }
}
chartIt()
getData()