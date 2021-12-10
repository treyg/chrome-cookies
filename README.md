
# Salesforce Staging Environment Switcher
This extension  is for changing the staging environment if the user is on a non-responsive page (ie, homepage). It works by deleting the secure cookie `dwsid` that sets the current environment. 

The extension deletes the cookie and reloads the page in the new environment.

## Installation
### Requirements
-   Chrome  `88+`
#### 1. Download the code from this repo as a zip file
![enter image description here](https://i.imgur.com/4Fta9Xb.png)

### 2. Unzip file in any location 
### 3. In your browser, go to `chrome://extensions/`
### 4. Turn on developer mode at the top right, then click `Load Unpacked`
![enter image description here](https://i.imgur.com/7loGyu0.png)
![enter image description here](https://i.imgur.com/6getpbN.png)
### 5. Select unzipped folder from file explorer
### 6. Click the extensions icon in chrome and pin `Env Switcher`
![enter image description here](https://i.imgur.com/THhHMoP.png)
## Usage 
### 1. Open Chrome dev tools and select a mobile device
![enter image description here](https://i.imgur.com/NTzAQCu.png)
### 2. Click the Env Switcher extension icon (page will reload)

### Note: To switch from a mobile to desktop environment, close dev tools and click the extension's icon.
