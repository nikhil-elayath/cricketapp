const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:root@localhost:5432/cricketalpha");

describe("Testing Postgres DB after INIT", () => {
	// test case for product_tableaa
	it("should have a user table", async () => {
		var data = await db.any("select * from users limit 1");
		expect(data).toEqual(expect.any(Array));
	});
	it("should have a user_name column in user table", async () => {
		var data = await db.any("select user_name from users limit 1");
		expect(data).toEqual(expect.any(Array));
	});
	it("should have a user_password column in users table", async () => {
		var data = await db.any("select user_password from users limit 1");
		expect(data).toEqual(expect.any(Array));
	});
	it("should have a user_email column in users table", async () => {
		var data = await db.any("select user_email from users limit 1");
		expect(data).toEqual(expect.any(Array));
	});
	it("should have a isadmin column table", async () => {
		var data = await db.any("select  isadmin from users limit 1");
		expect(data).toEqual(expect.any(Array));
	});
});
