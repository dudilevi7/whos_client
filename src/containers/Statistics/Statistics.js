import React from 'react';

<<<<<<< master
const Statistics = props => {
    return <h1>statsssssssss</h1>
=======
const Statistics = () => {
    const [statsData, setStatsData] = useState();

    useEffect(() => {
        const fetchStats = async () => {
            const data = await fetchData(REACT_APP_WHOS_API + REACT_APP_STATS_ROUTE)
            if (data) {
                console.log(data)
                setTimeout(() => {
                    setStatsData(data)
                }, 500);
               
            }
        }
        fetchStats()
    }, [])

    return (
        <div style={{marginInline:'20px'}} >
            {!statsData && <LoaderSpinner />}
            { statsData && <CustomTable data={statsData} color="white" bgcolor="#0079ED" />}
        </div>)

>>>>>>> local
}

export default Statistics