const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi,I am XXX");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);

dom.text(test, "你好，这是新内容");
dom.text(test);

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");

dom.class.add(test, "red");
dom.class.remove(test, "red");
console.log(dom.class.contains(test, "red"));

const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(testDiv);
