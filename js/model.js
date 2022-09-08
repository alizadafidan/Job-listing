export const state = {
  jobs: [],
  filters: [],
  filtered: [],
};

export const loadJobs = async function () {
  const res = await fetch("../data.json");
  const data = await res.json();
  console.log(data);
  state.jobs = data.map((job) => {
    return {
      id: job.id,
      company: job.company,
      image: job.logo,
      new: job.new,
      featured: job.featured,
      position: job.position,
      tags: [job.role, job.level, ...job.languages.concat(job.tools)],
      postedAt: job.postedAt,
      contract: job.contract,
      location: job.location,
    };
  });
  state.filtered = state.jobs;
  return state.jobs;
};

const init = function () {
  loadJobs();
};
init();
