class FilterView {
  _data;
  _parentElement = document.querySelector(".main");
  _tabletsContainer = document.querySelector(".filter-tablets");
  _clearBtn = document.querySelector(".filter-span-clear");

  addHandlerClear(handler) {
    this._clearBtn.addEventListener("click", () => {
      this._tabletsContainer.innerHTML = "";
      handler();
    });
  }

  addHandlerRemoveFilter(handler) {
    this._tabletsContainer.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = e.target.closest(".tablet-btn.filtered");
      if (!btn) return;
      const removeTag = btn.innerText;
      handler(removeTag);
    });
  }

  render(data) {
    this._data = data;
    const markup = `${data.map((job) => this.jobMarkup(job)).join("")}`;
    this._clear();
    this._tabletsContainer.insertAdjacentElement("beforeend", markup);
  }

  jobMarkup(filterString) {
    return `<button class="tablet-btn tablet-btn-filtered">${filterString}</button>`;
  }

  _clear() {
    this._tabletsContainer.innerHTML = "";
  }
}

export default new FilterView();
