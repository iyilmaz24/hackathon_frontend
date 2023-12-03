

const formPageHTML = `<div class="title-text">College Compare © 2023</div>
<form>
    <span>
        <input type="text" id="college-1" placeholder="College/University 1">
        <input type="number" id="finaid-1" placeholder="Financial Aid $">
    </span>
    <span>
        <input type="text" id="college-2" placeholder="College/University 2">
        <input type="number" id="finaid-2" placeholder="Financial Aid $">
    </span>
    <span>
        <label for="cost">How Important is Cost?</label>
        <input type="range" min="1" max="100" value="50" class="slider" id="cost">
    </span>
    <span>
        <label for="ranking">How Important is Ranking?</label>
        <input type="range" min="1" max="100" value="50" class="slider" id="ranking">
    </span>
    <span>
        <label for="ranking">Preferred Student Body Size?</label>
        <select name="size" id="size">
            <option value="tiny"> 100 - 10,000</option>
            <option value="small">10,0000 - 25,000</option>
            <option value="medium">25,000 - 45,000</option>
            <option value="large">45,000 + </option>
        </select>
    </span>
    <button type="button" id="compare-btn">Compare</button>
</form>`;



export {formPageHTML};

