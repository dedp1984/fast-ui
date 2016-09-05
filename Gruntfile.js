module.exports = function(grunt) { 
// ����
grunt.initConfig({ 
	pkg: grunt.file.readJSON('package.json'), 
	uglify: { 
		build: { 
		src: 'app/script/directives/*.js', 
		dest: 'build/<%= pkg.name %>.min.js' 
		} 
	},
	ngtemplates: { 
		app: { 
			cwd: 'app',
			src: 'templates/*.html', 
			dest: 'build/<%= pkg.name %>.template.js',
			options: {
				module:'fast.template',
				htmlmin: { 
					collapseBooleanAttributes: true, 
					collapseWhitespace: true, 
					removeAttibuteQuotes: true, 
					removeEmptyAttributes: true, 
					removeRedundantAttributes: true, 
					removeScriptTypeAttributes: true, 
					removeStyleLinkTypeAttributes: true 
				} 
			}
		} 
	},
	concat:{
		dist:{
			src: ['app/script/main.js','app/script/directives/*.js','build/<%= pkg.name %>.template.js'],
			dest: 'build/all.js',
		}
	}
	
}); 
// ���ز��
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-angular-templates');
grunt.loadNpmTasks('grunt-contrib-concat');
// Ĭ������
grunt.registerTask('default',['ngtemplates','concat']);
}; 