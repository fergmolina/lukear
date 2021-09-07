const { expect } = require("chai");

describe("Lukear NFT contract", function () {

    let Lukear;
    let owner;
    let buyer;
    let lukear;
  
    beforeEach(async function () {
      Lukear = await ethers.getContractFactory("Lukear");
      [owner, buyer] = await ethers.getSigners();
  
      lukear = await Lukear.deploy();
    });


  it("Claim buyer", async function () {
    await lukear.connect(buyer).claim(1);
    expect(await lukear.balanceOf(buyer.address)).to.equal(1);
  });

  it("Claim owner", async function () {
    await lukear.connect(owner).ownerClaim(9501);
    expect(await lukear.balanceOf(owner.address)).to.equal(1);
  });

  it("Claim normal owner", async function () {
    await lukear.connect(owner).claim(1);
    expect(await lukear.balanceOf(owner.address)).to.equal(1);
  });

  it("Claim anynumber", async function () {
    await lukear.connect(buyer).claim(3);
    expect(await lukear.balanceOf(buyer.address)).to.equal(1);
  });

  it("Reverted buyer claim owner", async function () {
    await expect(lukear.connect(buyer).ownerClaim(1)).to.be.revertedWith("Ownable: caller is not the owner");
  }); 


}); 