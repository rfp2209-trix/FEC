<h1 style="text-align: center">Hack Reactor Front-End Capstone - Team Trix</h1>

![App Overview gif]()

<div style="text-align: justify;">Welcome to Atelier Designs. This is a **mock** product page for an ecommerce website designed as a capstone project for Hack Reactor's Software Engineering Immersive Program. Each section of the page was designed by a an individual student working as a part of team Trix. The website and server interact with an existing API that provides all the relevent data.</div>
<br></br>

- [Products Overview](#products-overview)
- [Related Products](#related-products)
- [Questions & Answers](#questions-&-answers)
- [Reviews Breakdown](#reviews-breakdown)
<br></br>
---
## Tech Stack
- React v18
- Express/ Node
- Axios
- Heroku API ref

## Installation

1. run `npm i` in terminal to install dependencies
2. run `npm run start-server` to start the server.

## Contributions
[Cole Bienek](https://github.com/ColeMatthewBienek) - Product Overview\
[Hector Wong](https://github.com/hecwon) - Questions & Answers\
[Kyle Frandanisa](https://github.com/ksf0) - Related Products & Outfits\
Nyall Hasty - Ratings and Reviews

---

## Description
Using a pre-built inventory API, our team built an interactive front-end with JS, React, CSS, HTML, & that allowed users to look at a specific product, much like a regular e-commerce website. The page provides the standard components involved in such a site, such as an overview of the chosen product, suggested/related items for that product, questions, and reviews. Each individual widget provides its own interactivity.

## Products Overview
<div align="center">
<img src="https://media.giphy.com/media/IP9cVLCIRm5ZyezaXz/giphy.gif" >
</div>

This component is responsible for displaying key product elements. Front and center sits a large image of the currently-selected product -- to the left side runs a vertically-scrolling selection of alternate images related to the selected product. The style selector placed to the right allows the user to choose another style of the current product, and below that sits a form for the user to add the current item to their shopping cart.

## Key Functionality
### Main Image Carousel


<img src="https://media.giphy.com/media/RWENvfx0cZ04mvF9G1/giphy.gif" width="100px">


The user can use left and right arrows to scroll through the list of images. The carousel is set up in an infinite scroll, so there will be no **bump** at the end of the list of images.

## Pan Zoom Effect

<img src="https://media.giphy.com/media/JrR9vpt2bhPADeVl9F/giphy.gif" width="100px">


The user can click on the magnifying glass icon to zoom in on the currently selected image. The zoomed image is then available for panning effect.

## Deliverables Description
<div style="text-align: justify">
The **mock** client required that a user be able to select a style and then be presented with graphical alternate choices. If a (left-side) thumbnail was selected, that image must be displayed in the main window. The client also required that a badge be applied to the currenty selected image and style so that the suer was presented with visual reinforcement regarding exactly what product and style they were viewing.

The minimal Cart functionality simply required that the currently selected item be provided to the user for purchase; size and quantity were the only two parameters available.

The bulk of the work in this section centered around the interaction beyween dynamic and conditional rendering in React and React styled components. There is a wealth of subtle user feedback given from interactions with page elements -- from small hover effects to stying continuity -- the overview section delivers on its purpose: presenting the user with necessary details and choices to promote the clicking of the add-to-cart button.
</div>


## Related Products & Outfit List
![Related Products](https://media.giphy.com/media/WtYOP0t5nEdwVvL7pZ/giphy.gif)\
The related products & outfit list component



## Questions & Answers (Q&A)
The questions and answers component receives a product ID from the top-level context and makes a few calls to the inventory API to get the relevant data. The structure of this component is a list of individual questions, which each contain answer lists. All components are sorted according to a 'helpfulness' rating, determined by users of the site. Included points of interactivity for the user include searching for keywords, asking their own question, answering another question, reporting questions/answers, and voting for helpfulness.
### Search Function
A search bar is located at the top of the QA component. Once at least 3 characters are typed in, a few things will happen. First, a filtering function is performed on all questions and answers. Then, a search result component will be rendered, and the total results component will turn off. Since the search is done locally, results are instantaneous and
### Questions
Question components are the centerpiece of the QA component, which are mapped as a list. Each question has the ability to be answered, reported, or voted as helpful.
### Adding A Question
![AddQuestionGif](https://media.giphy.com/media/IkKMpsOHwDoXSAXuxC/giphy.gif)\
Users can add their own question by clicking the 'Ask A Question' button. This will open a modal form, where basic input fields are to be filled out.
### Answers
Answers are styled to appear nested within each question component, with images at the bottom of each answer. Upon click, images will generate a full-size modal, bounded by a percentage of the window dimensions.
### Adding An Answer
Upon clicking the 'Add Question' button, a modal will pop up in which a form is provided. Within this form, there are a few fields to fill out, as well as a picture uploading feature.

## Ratings & Reviews

![Ratings and Reviews](https://media.giphy.com/media/FSzLVme5Y3n3LMOiqP/giphy.gif)

The ratings and reviews component renders review information related to the product displayed on the page. It does so in two main subcomponents the reviews breakdown, which displays the products reviews meta data, and the reviews list, which displays individual reviews.

### Reviews Breakdown

The reviews breakdown displays the ratings breakdown, and the the characteristic breakdown.

#### Ratings Breakdown

The average review rating is displayed a number rounded to the nearest tenth and as a set of five stars that display the average rating as 5 stars with the rating shaded in to the nearest quarter star. The stars are shaded using a percentage and a linear gradient in CSS. To get the effect of only shading $\frac{1}{4}$, $\frac{1}{2}$, or $\frac{3}{4}$ stars the average rating is rounded to the rating that closest resembles the appropriate shading amount. Due to percentages, and spacing the average rating is not rounded to X.25, X.5, or X.75, but is instead round to three numbers that gave a better appearence. In the future I would like to change the component to render the fractions of a star in a radial manner instead of a linear.

Following the average rating the amount of reviews that rated the product each indivual rating one through five is displayed. This is displayed as bar shaded in. The shading is representative of the relative amount of reviews that gave that rating compared to the total amount of reviews. The actual number of reviews that for each rating is displayed at the end of the bar. The current styling allows for counts of up to (9999) reviews to be displayed for each rating without causing styling errors. If any products recieve that many reviews changes would need to be made. The individual ratings, their relative bars and amounts are clickable. Clicking one rating sorts and displays the reviews by the rating clicked. The user can click multiple ratings and stack the sorting feature. The sort is additive with other sorting features in the widget. more on sorting later.

#### Characteristic Breakdown

The characteristic breakdown renders the individual characteristics assosiated with the product. The characteristics that may be incuded with a product are; Length, Width, Comfort, Quality, Fit, and Size. Each chacteristic and its average rating is rendered conditionally on its association with the displayed product. The average rating is displayed as a arrow overlayed on a bar at the appropriate location relative to the average rating.

### Reviews List

The list of reviews renders the reviews for a product. If no reviews exist most of the component colapses and only the **Add Review** button and top bar are viewable. If the product has been reviewed two reviews will be initially displayed. The default sorting method is to sort by relevent, but the user can also sort by helpful, and newest, these three sorts were provided by the API. Changing the sorts is done by interacting with the dropdown menu in the top bar. Initially up to two reviews are displayed. If the products has been reviewed more then twice, the **More Reviews** button will appear. each click will render up to two more reviews. The user can continue clicking this button until all reviews are display at which time the button disappears. The user may also use the keyword search bar. When 4 or more characters are entered the reviews are automatically sorted by the search value. This search is not case sensitive. All sort functionality on the page is additive. The user may also click the **Add Review** button to review the product. upon clickiing this button a modal form appears. This modal is closable by clicking off the form.

### Add Review Form

The add review form is used to post a review to the API through our backend server. The review rating is selected by clicking the star rating related to a 1, 2, 3, 4, or 5 star rating. Upon clicking the rating the star clicked and all stars lower then the rating change color to gold to indicate the selected rating. It is wrequired that the user fill out the rating to submit a review. Next the user can choose to recommend or not recommend the product. This selection is again required to submit the form. After the  reccomendation section the characteristics related to the product are displayed with 5 clickable options. Underneath the first and last selction button the meaning of the button is displayed to represent the relative scale being displayed. Upon clicking the rating between one and five a message is displayed indicating the meaning of the rating. These selections are again required. After these selections the form displays inputs for a review summary, the actual review, the username, and the users email. The review summary is not required to submit the form but the other input fields are. The review must include 50 characters, and when the user begins inputing a review is notified of this via message text displayed above the input field. It is reccomended that the user not use their actual email address for privacy reasons, but the fake email provided must still be in the shape of a real email address E.g. "fakeEmail@fakeprovider.fakeDomain" . If the email provided does not match the shape the user is again notified via a text message above the input field. Upon successfully submitting a review the window closes, and the reviews meta data updates, as well as the reviews to display.

### Sorting Reviews

The API provided the sort options of Relevent, Helpful, and Newest. When requested the API provides reviews in the requested order. The sorting functionallity of the API is limited to those three options. To sort reviews by review rating and keywords, all reviews are requested from the API on page load with a sort pattern of Relevent. Upon changing the dropdown menu the client requests all reviews from the API again in the requested sort pattern. The keyword sort and indivdual ratings sort work together. As mentioned the indivual ratings sort is additive as well. So if the users wanted to search all 4 and 5 star reviews whose summary or review includes "amazing" the widget can provide those reviews. Clicking the indivudal rating, its bar, or amount once will activate the filter, clicking a second time deactivates the filter.

---
[Back to Top](#hack-reactor-front-end-capstone---team-trix)