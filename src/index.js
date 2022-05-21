import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function sqrt(n) {
  let start = 0;
  let end = n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(sqrt(49));
