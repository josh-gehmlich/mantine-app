## Code Challenge

1. Create a front-end react / nextjs / typescript app with a mock user [table in Matine](https://mantine.dev/core/table/) (3 rows X 4 columns).  Fill it with some mock data.  The table should take up the width of the window.
2. In the last column, place a variable number of div elements that contain short bits of text — i.e. their size of each div is determined by the length of the text, as see below:
![image](https://user-images.githubusercontent.com/71397124/177661349-8570795e-c8b9-4d4f-b07a-265599280beb.png)
3. If there is not enough space (e.g. the table is resized or it’s loaded on a smaller screen), collapse these the individual documents into a single button that says “Documents” with a “chevron” icon on the right.  Clicking on this button opens up a menu that displays the individual documents vertically.  The breakpoint where this behavior happens should automatically depend on the total width of documents in each row (i.e. not a global constant).  So if there are different numbers of documents on each row, they may turn into the “Documents” button at different widths.
4. If there are more than 4 vertical documents in the menu, make the menu scrollable.

- Bonus points for using mantine elements (e.g. [Mantine Group](https://mantine.dev/core/group/) / [Mantine Stack](https://mantine.dev/core/stack/)) where possible.
- Bonus points if you can accomplish #3 and #4 using just CSS (no JS).
- Bonus points for making the UX aesthetically pleasing.
- Bonus points for making it easy for me to run your solution to verify it.

### How to Install & Run
1. Run `npm install`
2. Run `npm run dev`
3. Go to http://localhost:3000
