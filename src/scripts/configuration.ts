export function posterImg(size:string,path:string |any){
    let poster2 = `https://image.tmdb.org/t/p/${size}${path}`;
    
    return poster2
}
export function backdrop(size:string,path:string |any){
    let backdropImg = `https://image.tmdb.org/t/p/${size}${path}`;
    
    return backdropImg
}
export function profileImg(size:string,path:string |any){
    let profileImg = `https://image.tmdb.org/t/p/${size}${path}`;
    
    return profileImg
}

// utils

// convert vote from .  to %

export function votePercentage(vote: number): string {
    const votingPercentage = (vote / 10) * 100;
    let Integer = votingPercentage.toFixed(0)
    return Integer
}

export function getColor  (vote: number){
    let dynamicDegree = (Number(votePercentage(vote)) / 100) * 360;
    if (Number(votePercentage(vote)) >= 75) {
            
        return `conic-gradient(rgb(0, 250, 87) ${dynamicDegree}deg , rgb(0, 250, 87 , .5)0deg)`;
    } else if (Number(votePercentage(vote)) >= 50) {
        return `conic-gradient(hsla(44, 100%, 49%, 1) ${dynamicDegree}deg  , hsla(44, 100%, 49%, .5)0deg)`;
    } else {
        return `conic-gradient(rgb(250, 0, 0) ${dynamicDegree}deg , rgba(250, 0, 0, 0.5)0deg)`;
    }
}

export function splitDate(date:string){
    if (typeof date !== 'string' || !date) {
        return undefined; 
      }
    let year = date.split("-")[0]
    
    return year
}




