const Command  = require("@oclif/core").Command;

export default class Hello extends Command {

    static override arg = {

    }


    public async run(): Promise<void>{
        this.log("Hello from oclif ")
    }
}