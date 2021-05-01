const fetchData = async(url,options)=>{
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        if (data) return data;
    } catch (err) {
        console.log(err);
    }

}
export default fetchData;