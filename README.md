# Job Board Frontend

* React version:
    "react": "^17.0.1"
* System dependencies:
    Developed on Windows 10

## Frontend Setup
1. CD into `jobBoard_frontend`.
2. Run `npm install`.
3. Run `npm start` to stat the frontend server. Usually, it will be at `localhost:8000`.

## Frontend Routs
### All rout is based on `localhost:8000`, yours could be different.
1. Job Board Index: http://localhost:8000/.
2. Job Opportunities Show: `http://localhost:8000/job_list/#{Job Source}`.
    #### Example: http://localhost:8000/job_list/Google.

## Frontend Third Party libraries
1. react-redux, redux
    #### Used for State Management.
    #### Future proof for large React application.
    #### No need to pass data down to multiple components or use function to get data to the top.
2. redux-thunk
    #### Allow synchronous redux have asynchronous functions such as `fetch`.
3. semantic-ui-react
    #### CSS library for React.
    #### Create UI in the same theme.
    #### Easy to use.
4. react-router-dom
    #### Creat URL for different pages.

## Redux
1. Component's lifecycle, event and etc (componentDidMount, onClick) run functiuon from Redux Store (mapDispatchToProps).
2. Correct function get ran in addapter in `./redux/adapters`, could be simple function or fetches.
3. Addapter dispatch one or more actions in `./redux/actions` with or without data.
4. Actions send data to Reducers in `./redux/reducers` to update state.
5. Component get new states from Redux Store (mapStateToProps).

## Code for waiting data
1. In both `JobBoard.js` and `JobList.js` have code to wait data from fetches.
2. This helps resolve long wait time for fetches that will cause error and bad user expirereance.
3. Code mainly check state if the data is in the state or not. If not it will show a loading icon and dimme the page until data go into the state.
4. State change will cause a new lifecycle, which will populate `SourceCard` or `JobListRow` in correct component.

## Pagination
1. Backend use `pagy` to create page data to the frontend.
2. Thest data is used to map page number on `<Menu.Item>` (Semantic Component).
3. If `"gap"`, `<Menu.Item>` will show `"..."` and make it unclickable.
4. Current page will be highlighted in `dark grey`.
5. Page data come with `job_opportunities` from backend.

## URL Shotener
1. Short all URL that over 100 Characters long to 100 Characters.
2. This will keep the format of the table.
3. URL are clickable which will direct user to job page in a new tab.

## Extra Design Information
1. PDF of design sketch in `./assents/extras`.
