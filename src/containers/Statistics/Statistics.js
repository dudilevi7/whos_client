import React, { useEffect, useState } from 'react';
import CustomTable from '../../components/Table/CustomTable';
import fetchData from '../../services/fetchData';
import { REACT_APP_WHOS_API, REACT_APP_STATS_ROUTE } from '../../constants/constants'
import { LoaderSpinner } from '../../components/Exceptions/Exceptions';

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
}

export default Statistics