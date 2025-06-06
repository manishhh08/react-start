function DarkMode() {
  return (
    <>
      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        {/* Dark mode toggle icon */}
        <label for="darkmode" id="darkmodelabel">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
      </div>
    </>
  );
}
export default DarkMode;
