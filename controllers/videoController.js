export const home = (req, res) => res.render("home", {pageTitle: "Home"});

export const search = (req, res) => {
    // const searchingBy = req.query.term; // ES6 이전 방식
    const {query: {term : searchingBy}} = req;
    //res.render("search", {pageTitle: "Search", searchingBy: searchingBy}); // ES6 이전 방식
    res.render("search", {pageTitle: "Search", searchingBy}); 
}

export const videos = (req, res) => res.render("Videos", {pageTitle: "Videos"});

export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
