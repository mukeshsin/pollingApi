import Poll from "./poll.js";
import Option from "./option.js";
import Vote from "./vote.js";

Poll.hasMany(Option, {
  as: "optionList",
});
Option.hasMany(Vote)

export default { Poll, Option };
