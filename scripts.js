document.addEventListener("DOMContentLoaded", () => 
{
  form = document.querySelector("form");
  if (form) 
  {
    form.addEventListener("submit", (event) =>
    {
      event.preventDefault();
      alert("We appreciate you taking the time to write us some feedback. We'll answer as soon as we get off our boat!");
      form.reset();
    });
  }
});