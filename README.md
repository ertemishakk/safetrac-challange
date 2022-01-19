# SAFETRAC UX CHALLENGE

# [LIVE DEMO](https://safetrac.herokuapp.com/)

## Description

An implementation of SafeTrac UX Challange

## Technologies and Dependencies used
-React <br/>
-Nodejs <br/>
-Bootstrap <br/>
-Reactstrap <br/>

## Instructions

To run this full stack app, <br/>

-You'll need to have nodejs and npm installed. <br/>

-If you dont have nodejs and npm set up [click here](https://nodejs.org/en/download/) and download the recommended version of nodejs which includes npm.


-Clone the project from the github repo ```git clone https://github.com/ertemishakk/safetrac-challange``` <br/>

Front and back end requires seperate setup.

Initially navigate to ```client``` folder (```cd client```) in your terminal from root file and install the node modules for the front with the following command.

### `npm install`

Then navigate to ```server``` folder (``` cd ..``` and then ```cd server```) and install the node modules for the backend using the same command.

### `npm install`

Then use the following command to run the application on the local network. 
### `npm run dev`

After running this command, your default browser should open [http://localhost:3000](http://localhost:3000). 
If for some reason browser doesn't open, open your preferred browser and navigate to [http://localhost:3000](http://localhost:3000).


The page will reload if you make edits.<br />
You will also see any lint errors in the console.



### File Structure

The application frontend and backend is seperated into 2 major folders. The front end uses a standard react app approach and backend uses a nodejs server. 



## Architectural Elements and Decisions

The application uses a standard react app approach in the frontend to seperate UI elements into smaller components, which helps collaborators understand the application logic. S


## Trade offs


-The sample UX is not responsive, most of the components have set width, making it harder to optimize across devices.







