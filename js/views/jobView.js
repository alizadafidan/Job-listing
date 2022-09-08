class JobView {
  _data;
  _parentElement = document.querySelector(".job_listings");
  _filterContainer = document.querySelector(".filter");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const tagBtn = e.target.closest(".tablet-btn");
      //   guard clause
      if (!tagBtn) return;
      const filterValue = tagBtn.innerText;
      handler(filterValue);
      //display filter bar
      this._filterContainer.style.opacity = "1";
      this._filterContainer.style.pointerEvents = "all";
    });
  }

  render(data) {
    if (!data) return;
    this._data = data;
    const markup = `${data.map((job) => this.jobMarkup(job)).join("")}`;
    this._parentElement.insertAdjacentElement("beforeend", markup);
  }

  jobMarkup(job) {
    return ` 

    <div class="job">
    <div class="right-border  ${job.featured ? "" : "hidden"}"></div>
    <div class="job-details">
      <img class="image" src="${job.image}" alt="${job.company}" />
      <div class="info">
        <span class="company-name">${job.company}</span>
        <div class="status">
          <div class="job-status job-status-new ${
            job.new ? "" : "hidden"
          }"><span>new!</span></div>
          <div class="job-status job-status-featured ${
            job.featured ? "" : "hidden"
          }">
            <span>featured!</span>
          </div>
        </div>
        <h3 class="job-name">${job.position}</h3>
        <div class="job-description">
          <span>${job.postedAt}</span>
          <span class="job-description">${job.contract}</span>
          <span class="job-description">${job.location}</span>
        </div>
      </div>
    </div>
    <div class="single-line hidden"></div>
    <div class="job-tablets">
    ${job.tags
      .map((tag) => `<button class="tablet-btn">${tag}</button>`)
      .join("")}  
 
    </div>
  </div>

    `;
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}

export default new JobView();
