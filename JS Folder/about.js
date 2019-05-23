class Member {
  constructor(memberDom) {
    this.memberDom = memberDom;
    this.expandButton = this.memberDom.querySelector(".expandButton");

    this.expandButton.textContent = "expand";

    this.expandButton.addEventListener("click", () => this.expandMember());
  }

  expandMember() {
    this.memberDom.classList.toggle("team-member-open");
  }
}

let members = document.querySelectorAll(".team-member");

members.forEach(memberDom => new Member(memberDom));
