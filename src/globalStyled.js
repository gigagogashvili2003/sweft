import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, sub, sup, tt, var,
b,i, center,
dl, dt, dd, ol, ul, li, form, label,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
u,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
i {
	font-style: italic;
}


*, *::before, *::after {
    box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

/* Global classnames */

.flex_align_center {
	display: flex;
    align-items: center;
}

.flex_justify_center {
	display: flex;
	justify-content: center;
}

.flex_center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.flex_column {
	display: flex;
	flex-direction: column;
}

.p_10px{
	padding: 10px;
}

.p_block_25px {
	padding-block: 25px;
}

`;
