module.exports = {
    app: {
        token: 'NzQ2MzMxNTI5ODczMTk1MDk4.Gtn0kb.WlRGPhHcwvYm6_kUoWDMZ1Mn9PgvhRVlUewq-o',
        playing: 'by ali ❤️',
        global: true,
        guild: '',
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
