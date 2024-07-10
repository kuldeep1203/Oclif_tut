const Command  = require("@oclif/core").Command;

export default class Hello extends Command {
    public async run(): Promise<void>{
        this.log("Hello from oclif ")
    }
}