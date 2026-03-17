actor {
  var leadCount = 0;

  public shared ({ caller }) func onLeadClick() : async () {
    leadCount += 1;
  };

  public query ({ caller }) func getLeadCount() : async Nat {
    leadCount;
  };
};
