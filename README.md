# Web Development Project 2 - *Mineral: Non-Silicate Study Guide*

Submitted by: **Angela Cui**

This web app: **Study Guide for identifying non-silicate minerals: calcite, magnetite, quartz, conrundum, pyrite, chalcopyrite, galenite, hematite, fluorite, halite, copper, graphite, malachite, azurite, sulfur, dolomite**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [X] **A single card at a time is displayed, only showing one of the components of the information pair**
- [X] **A list of card pairs is created**
- [X] **Clicking on the card shows the corresponding component of the information pair**
- [X] **Clicking the next (random) button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [X] Cards have different visual styles such as color based on their category
  - [X] Colors only set on the definition side
  - [X] Red: White Streak (hardest to identify)
  - [X] Orange: Black Streak (medium to identify)
  - [X] Green: Other colored Streak (easiest to identify)

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!
* [X] Added a next and previous button that can be used for a more linear learning style

The following are **required** but not listed in the original README from the Project description on CodePath site

- [X] useState is utilized in all jsx files for indices for the list of minerals
- [X] onClick is utilized is utilized in App.jsx for the card flipping (no animation D:)

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Video Walkthrough Giphy](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZpeHVvZnZ6cXl3MnI0emYxZHRzYmJiN3V0dHg2MHBhMWN4MjQ3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qV7lRlKMTQoafmTs5v/giphy.gif)


<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Kap](https://getkap.co/) for macOS and Giphy.
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

I had some challenges with getting the cards to display individually and through a counting index system. 
I had a lot of trouble with getting the count prop to work through App.jsx into multiple different jsx files like Cards, Definition, and Term since I was only used to working with props in html classes.

## License

    Copyright [2024] [Angela Cui]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.