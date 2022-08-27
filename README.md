# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Opera Snapshot_2022-08-27_212400_joblisting-gbr netlify app](https://user-images.githubusercontent.com/99536233/187045262-455fabfb-2ed1-4e77-8623-d23633ce5dda.png)

### Links

- Solution URL: https://github.com/AbdElrahmanGbr/joblisting-ReactJs
- Live Site URL: https://joblisting-gbr.netlify.app 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned:

the filtration part using tags and storing them in filters array and reseting each tag from the filter by pressing it (it was challenging to me ^^)

    const handleTagClick = (tag) => {
        if (filters.includes(tag)) return;
        setFilters([...filters, tag]);
    };
    const clearFilters = () =>{
        setFilters([]);
    };

    const filteredJobs = jobs.filter(filterFunc);
    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter(f => f !== passedFilter));
    };



### Continued development

- child-parent relationship (passing functions and props in general between them).
- mapping (using key in mapping).

### Useful resources

- https://nerdcave.com/tailwind-cheat-sheet - This helped me with styling classNames in tailwind css.
- https://www.fullstacklabs.co/blog/building-a-responsive-filter-component-on-react - This is an amazing article which helped me finally understand useState, useEffect and building responsive filtring bar. I'd recommend it to anyone still learning this concept.

## Author

- AbdElrahman Gbr
- Frontend Mentor - [@AbdElrahmanGbr](https://www.frontendmentor.io/profile/AbdElrahmanGbr)
- Twitter - [@AbdelrahmanGbr4](https://twitter.com/AbdelrahmanGbr4)

