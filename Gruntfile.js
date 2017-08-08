module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    sizes: [{
                            width: 20,
                            height: 20,
                        },
                        {
                            width: 35,
                            height: 35,
                        },
                        {
                            width: 50,
                            height: 50,
                        }, {
                            width: 120,
                            height: 80,
                        }, {
                            width: 240,
                            height: 160,
                        },
                        {
                            width: 640,
                            height: 427,
                        },
                        {
                            width: 840,
                            height: 640,
                        },
                        {
                            width: 1100,
                            height: 840,
                        },
                        {
                            width: 2040,
                            height: 1240,
                        }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**.{jpg,gif,png}'],
                    cwd: 'img_src/',
                    dest: 'img/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');

    // Default task(s).
    grunt.registerTask('default', ['responsive_images']);
};