📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Kudos Board

Submitted by: **Luis-Angel Moreno, Heiryn Hernandez Rojas, Joanna Echeverri Porra**

Deployed Application (optional): [Kudos Board Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

##### Home Page

- [] **Home Page Display**
  - [ ] Home page includes the following features:
    - [ ] Header
    - [ ] Banner
    - [ ] Search bar
    - [ ] List of boards
    - [ ] Footer
- [ ] **Display Boards**
  - [ ] Users can view a list of all boards in a grid view on the home page.
  - [ ] For each board displayed, users can see:
    - [ ] An image/gif
    - [ ] A board title
- [ ] **Filter Boards**
  - [ ] Home page includes navigation bar, drop down, or some other mechanism which allows users to filter boards by the following categories:
    - [ ] All/Home (displays all boards)
    - [ ] Recent (displays the 6 most recently created boards)
    - [ ] Celebration
    - [ ] Thank you
    - [ ] Inspiration
  - [ ] When a category is clicked, boards matching the specified category are displayed.
- [ ] **Search Functionality**
  - [ ] Users can use a search bar to search for boards by title on the home page.
  - [ ] The search bar should include:
    - [ ] Text input field
    - [ ] Submit/Search Button
    - [ ] Clear Mechanism
  - [ ] Boards with a title containing the search query in the text input field are displayed in a grid view when the user:
    - [ ] Presses the Enter key
    - [ ] Clicks the Submit/Search button
  - [ ] User can delete all text from the text input field.
  - [ ] When all text is cleared from the text input field, all boards are displayed in a grid view
- [ ] **View Board**
  - [ ] Users can click on a board in the grid view to navigate to a new page containing that board's details.
- [ ] **Add New Board**
  - [ ] Users can create a new board on the home page.
  - [ ] When creating a new board, users can specify the:
    - [ ] Title (required)
    - [ ] Category (required)
    - [ ] Author (optional)
  - [ ] Items listed as required above must have a value to succesffuly create a new board.
  - [ ] When the board is successfully created, it appears in the grid of boards.
- [ ] **Delete Board**
  - [ ] User can delete boards on the home page.
  - [ ] When the board is deleted, the board disappears from the grid of boards.

##### Board Page

- [ ] **Display Cards**
  - [ ] For a given board, the board's page displays a list of all cards for that board in a grid view.
  - [ ] For each card should displayed, users can see the card's:
    - [ ] Message
    - [ ] Gif
    - [ ] Number of upvotes
    - [ ] Delete button
- [ ] **Add New Card**
  - [ ] Users can make a new card associated with the current board.
  - [ ] To successfully create a new card, users must specify the following:
    - [ ] Text message (required).
    - [ ] A gif users can search for and select within the form using the [GIPHY API](https://developers.giphy.com/docs/api/) (required).
  - [ ] Users are given the option to specify the author of the card.
  - [ ] When the new card is successfully created, it appears in the grid of cards.
- [ ] **Upvote Card**
  - [ ] Users can upvote a card.
  - [ ] Update the vote count on the card tile when a user clicks the upvote icon.
  - [ ] When the upvote icon is clicked the upvote count increases by 1.
  - [ ] A user can upvote a card multiple times.
- [ ] **Delete Card**
  - [ ] Users can delete cards.
  - [ ] When the user clicks the delete button for a card, the card disappears from the grid of cards.

#### Stretch Features

- [ ] **Deployment**
  - [ ] Website is deployed via Render.
- [ ] **Comments**
  - [ ] Users can add comments to cards.
  - [ ] To successfully add a comment, users must specify a text message body.
  - [ ] Users are given the option to specify the author of the comment.
  - [ ] Users can view comments on card in a pop-up modal that displays the card's:
    - [ ] Text message
    - [ ] Gif
    - [ ] Author (if specified)
    - [ ] A list of the card's comments and each comment's:
      - [ ] Message body
      - [ ] Author (if specified)
  - [ ] Users can add multiple comments to a single card.
- [ ] **Dark Mode**
  - [ ] Users can toggle between light mode and dark mode using a button displayed on the:
    - [ ] Home Page
    - [ ] Board Pages
  - [ ] When the button is clicked, the color theme switches to the opposite of the current mode.
  - [ ] When dark mode is enabled:
    - [ ] Text and icons use a light color
    - [ ] The background uses a dark color
    - [ ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ ] When light mode is enabled:
    - [ ] Text and icons use a dark color
    - [ ] The background uses a light color
    - [ ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ ] The chosen mode (light or dark) persists when navigating from home page to board pages and vice versa.
  - [ ] When the user first visits the site the theme defaults to light mode.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast in both light and dark mode. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it.
- [ ] **Pinned Cards**
  - [ ] Users can pin a card to the top of the board.
  - [ ] A Pin button is displayed on each card.
  - [ ] When the user clicks the Pin button of an unpinned card:
    - [ ] The card moves to the top of the grid view for that board.
    - [ ] There is some visual feedback to indicate a card's pin status (e.g., a pin icon, a border highlight).
    - [ ] The pin action is saved so that the card remains pinned after page refreshes.
  - [ ] When the user clicks the Pin button of a pinned card:
    - [ ] The card returns to its original position in the grid based on its creation time or to the end of the grid.
    - [ ] The card's pin status (e.g., a pin icon or highlight) is removed.
    - [ ] The unpin action is saved so that the card remains unpinned after page refresh.
  - [ ] Pinned cards always appear at the top of the board, above unpinned cards.
  - [ ] If multiple cards are pinned, they maintain their pinned order based on the time they were pinned.
    - [ ] More recent pins should appear first.
- [ ] The pinned state of a card persists when:
  - [ ] navigating away from and back to the board.
  - [ ] refreshing the page.
- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ] Boards and cards should be associated with a user.
    - [ ] Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.

### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/23aec2c2b98443298944a30fe6856c7d">
      <p>Kudos Board - 3 July 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/23aec2c2b98443298944a30fe6856c7d">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/23aec2c2b98443298944a30fe6856c7d-aa97de2fd0f3dc9c-full-play.gif">
    </a>
  </div>

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Add your response here

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

Add your response here

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
