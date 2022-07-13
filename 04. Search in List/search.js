function search() {
   let towns = Array.from(document.querySelectorAll(`#towns li`));
   let useWord = document.getElementById(`searchText`).value;
   let match = document.getElementById(`result`);
   let count = 0;

   for (const town of towns) {
      if(town.textContent.includes(useWord)) {
         town.style.fontWeight = `bold`;
         town.style.textDecoration = `underline`;
         count++;
      } else {
         town.style.fontWeight = `normal`;
         town.style.textDecoration = `none`;

      }
   }
   match.textContent = `${count} matches found`
}
