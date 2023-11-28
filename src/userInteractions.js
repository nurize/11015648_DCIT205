const dropdowns =  document.querySelectorAll('.options');

//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements for each dropdown
    const dropdownbutton = dropdown.querySelector('.dropdownbutton');
    const caret = dropdown.querySelector('.caret');
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
}
    )

const accordionSections = document.querySelectorAll('.contents');
const radioButtons = document.querySelectorAll('[name="accordion"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', () => {
    const targetContentSection = document.querySelector(`#${radioButton.id} + .contents`);

    accordionSections.forEach((contentSection) => {
      if (contentSection !== targetContentSection) {
        contentSection.style.maxHeight = '0px';
      }
    });

    targetContentSection.style.maxHeight = targetContentSection.scrollHeight + 'px';
  });
});
