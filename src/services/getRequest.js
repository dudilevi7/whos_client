const getRequest = async(url,options)=>{
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        if (data) return data;
    } catch (err) {
        return err;
    }

}
export default getRequest;