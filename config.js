module.exports = {
    app: {
        token: 'MTIyOTgxMDI2MDU1MDYxOTEzNw.GfObAB.EFLgY0AlK8gqBhXS1b3aLicOP2Puv3KYTYhlFw',
        playing: 'by Zerio ❤️',
        global: true,
        guild: '1200035395610619914',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
