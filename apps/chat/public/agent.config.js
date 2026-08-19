/*
 * START HERE: make this agent feel like your own.
 *
 * Change only the words and colour between the quotes below, save the file,
 * then refresh http://localhost:3000 in your browser.
 *
 * This is the fallback shown before a teammate is picked. Each teammate
 * (Skipper, Scout, Closer) carries its own name and voice from
 * apps/chat/config/agents.json.
 */
window.AGENT_CONFIG = Object.freeze({
  name: "Sports Insight Media",
  subtitle: "Your squad: Skipper runs the plan, Scout finds the search openings, Closer handles the enquiries.",
  welcomeMessage:
    "Hi Jayneel. Pick a teammate on the left. Skipper for the plan and the tasks. Scout for research, articles and their images. Closer for enquiries and proposals.",
  primaryColour: "#192a48",
  examplePrompts: [
    "Turn these meeting notes into decisions and action items",
    "Research sportsinsightmedia.com.au and show me article ideas",
    "Draft a reply to this enquiry that just came in",
  ],
});
