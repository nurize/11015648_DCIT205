

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
