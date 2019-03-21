export const getMinInMs = ms => {
    let temp = Math.floor(ms / 60);
    return temp < 10 ? `0${temp}` : temp;
};
export const getSecInMs = ms => {
    let temp = Math.floor(ms % 60);
    return temp < 10 ? `0${temp}` : temp;
};
export const getMsInMs = ms => {
    let temp = Math.round((ms % 60 - getSecInMs(ms)) * 100);
    return temp < 10 ? `0${temp}` : temp;
};
export const timeStampToMs=timeStamp=>{
  let min=Number(timeStamp.split(':')[0]);
  let s=Number(timeStamp.split(':')[1]);
  return min*60+s;
};