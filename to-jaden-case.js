String.prototype.toJadenCase = function () {
  return this.toString()
    .split("")
	  .map((v, k, arr) => arr[k-1] == ' ' || k == 0 ? v.toUpperCase() : v)
    .join("")
};

//03-13-2019